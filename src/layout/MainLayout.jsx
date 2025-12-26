import { Layout, Breadcrumb, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";

const { Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="bg-[]">
      <AppSidebar />
      <Layout>
        <AppHeader />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[
              { title: "Home" },
              { title: "List" },
              { title: "Dashboard" },
            ]}
            style={{ margin: "16px 0" }}
          />

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
