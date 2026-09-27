import { useCallback, useState } from "react";
import AutoComplete from "./AutoComplete";
import type { Option } from "./types";

import "./style.css";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type UserSearchResponse = { users: User[] };

export default function AutoCompleteExercise() {
  const [selectedUser, setSelectedUser] = useState<Option | null>(null);

  const fetchUsers = useCallback(async (query: string, signal: AbortSignal): Promise<Option[]> => {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`,
      { signal },
    );
    if (!response.ok) throw new Error(`Search failed: ${response.status}`);

    const data = (await response.json()) as UserSearchResponse;
    return data.users.map((user) => ({
      id: String(user.id),
      label: `${user.firstName} ${user.lastName}`,
    }));
  }, []);

  return (
    <section className="auto-complete-exercise">
      <h2>AutoComplete Exercise</h2>
      <AutoComplete
        fetchOptions={fetchUsers}
        selectedOption={selectedUser}
        onSelectionChange={setSelectedUser}
        label="Search users"
        placeholder="Type a name"
      />
      <p>Selected user ID: {selectedUser?.id ?? "None"}</p>
    </section>
  );
}
