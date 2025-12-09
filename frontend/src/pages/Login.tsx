import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

function Login() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-gray-950">
      {/* LEFT SIDE */}
      <div className="text-white flex justify-center items-center flex-col px-6">
        <h2 className="text-4xl md:text-5xl font-bold my-3 text-center">
          Welcome Back to <span className="text-primary">TicketHub</span>
        </h2>

        <p className="text-md text-gray-400 text-center">
          Manage issues, track progress, and stay in control
        </p>
        <p className="text-md text-gray-400 text-center">
          all from one powerful dashboard.
        </p>

        <form className="my-8 w-full px-6  2xl:px-64">
          <div className="mb-8">
            <Label className="mb-2" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <Button className="mt-6 w-full bg-primary">Login</Button>

          <p className="mt-3 text-center">
            You don't have an account?
            <Link to={"/register"}>
              <span className="text-primary font-bold"> Register</span>
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE IMAGE — hidden on phone/tablet */}
      <div className="h-screen hidden lg:block">
        <img
          className="h-full w-full bg-cover object-cover"
          src="/images/login.jpeg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Login;
