import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, AppShell, AppShellMain } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <AppShell 
          layout="alt"
          navbar={{
            width: { base: 80, md: 260},
            breakpoint: ''
          }}
          header={{
            height: 70
          }}
        >
          <Header />
          <Sidebar />
          <AppShellMain>
            {children}
          </AppShellMain>
        </AppShell>  
      </ModalsProvider>
      
    </MantineProvider>
  );
}