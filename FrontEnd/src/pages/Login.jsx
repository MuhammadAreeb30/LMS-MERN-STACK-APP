// ky9TiT9NQd9qmzXs
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signData, setSignData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeInputEvent = (e, type) => {
    const { name, value } = e.target;
    if (type === "sign") {
      setSignData({ ...signData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };
  const loginFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginData, "data");
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Tabs defaultValue="sign-up" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Sign up in just a few seconds to unlock powerful features made
                just for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={signData.name}
                      onChange={(e) => changeInputEvent(e, "sign")}
                      placeholder="your name"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={(e) => changeInputEvent(e, "sign")}
                      name="email"
                      value={signData.email}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      onChange={(e) => changeInputEvent(e, "sign")}
                      name="password"
                      value={signData.password}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Sign up
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <a className="underline underline-offset-4">Log in here</a>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={loginFormSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={changeInputEvent}
                      name="email"
                      value={loginData.email}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      onChange={changeInputEvent}
                      name="password"
                      value={loginData.password}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a className="underline underline-offset-4">Sign up</a>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
