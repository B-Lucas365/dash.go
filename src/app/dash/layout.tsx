import Container from "@/components/Container"
import { SideBar } from "@/components/SideBar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Container direction="row">
            <SideBar />
            {children}
        </Container>
    )
  }