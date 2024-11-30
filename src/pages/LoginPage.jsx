import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Error from "@/components/Error";
import { AuthService } from "@/services/AuthService";

function Login() {
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let phoneNumber = e.target[0].value; //Phone number input value
    let pwd = e.target[1].value; //password input value
    try {
      const data = await AuthService.login({ phone_number: phoneNumber, password: pwd }) 
      AuthService.setSession(data)
      navigate('/dashboard')
    } catch (err) {
      console.log("Error with auth:", err);
      setErrMsg(err.response.data.errors.phone_number)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Please sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone number</Label>
              <Input
                id="phone-number"
                type="text"
                placeholder="+998 99 999 99 99"
                required
              />
              {<Error>{errMsg}</Error>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            <a href="#" className="text-primary hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
