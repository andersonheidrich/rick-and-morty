"use client";
import "./globals.css";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
// import { Header } from "@/components";
import { FavoritesProvider } from "@/hooks/useFavorites";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ApolloProvider client={client}>
          <FavoritesProvider>
            {/* <Header /> */}
            {children}
          </FavoritesProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
