import { useEffect, useState } from "react";
import { fetchProductDetails, fetchProducts } from "./api";
import type { ProductDetail, ProductSummary } from "./types";
import "./style.css";

const TTL = 10_000;
type LoadStatus = "loading" | "success" | "error";
type DetailStatus = "idle" | LoadStatus;
type CacheEntry = { time: number; value: ProductDetail };

const formatPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

export default function ProductCacheExercise() {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [listStatus, setListStatus] = useState<LoadStatus>("loading");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [detailStatus, setDetailStatus] = useState<DetailStatus>("idle");
  const [cache, setCache] = useState<Map<number, CacheEntry>>(() => new Map());

  useEffect(() => {
    const controller = new AbortController();

    void fetchProducts(controller.signal)
      .then((items) => {
        if (controller.signal.aborted) return;
        setProducts(items);
        setListStatus("success");
      })
      .catch(() => {
        if (!controller.signal.aborted) setListStatus("error");
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (selectedId === null) return;

    const now = Date.now();
    const cacheData = cache;
    const getDetailFromCache = cacheData.get(selectedId);

    if (getDetailFromCache && now < getDetailFromCache?.time) {
      setDetail(getDetailFromCache.value);
      setDetailStatus("success");
      return;
    }

    const controller = new AbortController();

    void fetchProductDetails(selectedId, controller.signal)
      .then((product) => {
        if (controller.signal.aborted) return;

        const cacheData = new Map(cache);

        cacheData.set(selectedId, {
          time: Date.now() + TTL,
          value: product,
        });

        setCache(cacheData);

        setDetail(product);
        setDetailStatus("success");
      })
      .catch(() => {
        if (!controller.signal.aborted) setDetailStatus("error");
      });

    return () => controller.abort();
  }, [selectedId]);

  const selectProduct = (id: number) => {
    if (id === selectedId) return;
    setSelectedId(id);
    setDetail(null);
    setDetailStatus("loading");
  };

  return (
    <section className="product-cache-exercise">
      <h2>Product details</h2>
      <div className="product-cache-layout">
        <section
          className="product-cache-panel"
          aria-labelledby="products-heading"
        >
          <h3 id="products-heading">Products</h3>
          {listStatus === "loading" && <p role="status">Loading products…</p>}
          {listStatus === "error" && (
            <p role="alert">Could not load products.</p>
          )}
          {listStatus === "success" && (
            <ul className="product-cache-list">
              {products.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    aria-pressed={selectedId === product.id}
                    onClick={() => selectProduct(product.id)}
                  >
                    <span>{product.title}</span>
                    <span>{formatPrice(product.price)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section
          className="product-cache-panel"
          aria-labelledby="details-heading"
        >
          <h3 id="details-heading">Details</h3>
          {detailStatus === "idle" && (
            <p>Select a product to see its details.</p>
          )}
          {detailStatus === "loading" && <p role="status">Loading details…</p>}
          {detailStatus === "error" && (
            <p role="alert">Could not load product details.</p>
          )}
          {detailStatus === "success" && detail && (
            <div className="product-cache-detail">
              <img src={detail.thumbnail} alt="" />
              <h4>{detail.title}</h4>
              <p>{formatPrice(detail.price)}</p>
              <p>{detail.description}</p>
              <p>Category: {detail.category}</p>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
