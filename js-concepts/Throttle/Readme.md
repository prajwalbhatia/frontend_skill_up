## What is Throttling?

Throttling is a technique used to control the rate at which a function or process is executed. It ensures that the function is not called more frequently than a certain threshold, thereby limiting the number of times it can be invoked within a specific time interval.

## Use Case of Throttling

A common use case of throttling will be, you must have seen in many application on signup pages  that after hitting the Button get OTP it basically get disabled and a timer starts saying that you can try to resend the OTP in 1 min again.

This is one of the application of throttling, see when a user clicks on Send OTP button , a api call is made which basically triggers a email and sometimes it takes longer to get OTP deliver to your mailbox and meanwhile we will get response from our api saying email sent, so for this reason usually application keep some buffer timer to get the OTP deliver to the mailbox and also they don't want the user to randomly spam the email triggering.

If no timer is set then user will keep on hitting the Get OTP button until they will get a OTP in that case it will be a complete waste of resources.

So to get rid of this problem a timer is usually set on frontend and this timer is nothing but application of throttling

