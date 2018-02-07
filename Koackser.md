Messages can travel between client and publisher during messaging.

ACtion Cable (Rails library) that runs websockets. Use with rails 5.0

In production, we need something to handle asyncronous jobs. IF too many folks are chatting, we dont want to overhwlem the server. Need to create a job que.
Install redis to help with that.

a channels folder will live inside the app folder, and are like controllers. Will have a chats channel.
-channel.rb
--can define a method for allyour channels in ehre

-connection object is creeated and helps authenticate.

in devise, you can use current_user to call for info. Action cable can't so you hack it.

define a class method that calls:

def connection self.current_user=find_verified_user
end

set up warden hooks to set and grab cookies when someone joins the channel.

add this warden file if you don't already ave it. this handles log outs and cookie tracking.

also need chat channel "controller"
