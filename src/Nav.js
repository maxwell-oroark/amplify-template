import { useLocation, Link } from "wouter";
import { Breadcrumb, Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Nav({ user, signOut }) {
  const [location] = useLocation();
  const [, , projectId, , cellId] = location.split("/");

  return (
    <header className="sticky top-0 left-0 right-0 flex px-10 py-5 justify-between border border-b-1">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link className="text-xl" to="/projects">
            home
          </Link>
        </Breadcrumb.Item>
        {projectId && (
          <>
            <Breadcrumb.Item>
              <Link className="text-xl" to="/projects">
                projects
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="text-xl" to={`/projects/${projectId}`}>
                {projectId}
              </Link>
            </Breadcrumb.Item>
          </>
        )}
        {cellId && (
          <>
            <Breadcrumb.Item>
              <span className="text-xl">cells</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="text-xl">{cellId}</span>
            </Breadcrumb.Item>
          </>
        )}
      </Breadcrumb>
      <div>
        <Popover
          placement="topRight"
          content={
            <>
              <p className="mb-2">
                signed in as{" "}
                <span className="font-semibold">{user.attributes.email}</span>
              </p>
              <Button block onClick={signOut}>
                sign out
              </Button>
            </>
          }
        >
          <Avatar icon={<UserOutlined />} />
        </Popover>
      </div>
    </header>
  );
}
