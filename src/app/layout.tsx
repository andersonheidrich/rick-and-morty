"use client";
import "./globals.css";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Header } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ApolloProvider client={client}>
          <Header />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
