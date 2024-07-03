import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>hello</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
