import { useLocation, Link } from "wouter";
import { Breadcrumb, Avatar, Popover, Button } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default function Nav({ user, signOut }) {
  const [location] = useLocation();
  const [, projects, projectId, , cellId] = location.split("/");

  return (
    <header className="sticky top-0 left-0 right-0 flex px-10 py-5 justify-between">
      <Breadcrumb>
        {projects && (
          <Breadcrumb.Item>
            <HomeOutlined />
          </Breadcrumb.Item>
        )}
        {projectId && (
          <>
            <Breadcrumb.Item>
              <Link to="/projects">projects</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/projects/${projectId}`}>{projectId}</Link>
            </Breadcrumb.Item>
          </>
        )}
        {cellId && (
          <>
            <Breadcrumb.Item>cells</Breadcrumb.Item>
            <Breadcrumb.Item>{cellId}</Breadcrumb.Item>
          </>
        )}
      </Breadcrumb>
      <div>
        <Popover
          placement="topRight"
          content={
            <>
              <p>{`signed in as ${user.attributes.email}`}</p>
              <Button onClick={signOut}>sign out</Button>
            </>
          }
        >
          <Avatar icon={<UserOutlined />} />
        </Popover>
      </div>
    </header>
  );
}
