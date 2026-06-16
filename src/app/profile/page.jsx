"use client";
import { UpDateUserModal } from "@/components/UpDateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const profilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
//   console.log(user);

  return (
    <div >
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 ">
        <Avatar className="h-20 w-20" size="sm">
          <Avatar.Image
            alt="man image"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <p className="font-bold text-xl">{user?.name}</p>
        <p className="text-muted">{user?.email}</p>

        <UpDateUserModal></UpDateUserModal>
      </Card>
    </div>
  );
};

export default profilePage;
