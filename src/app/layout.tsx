"use client";
import "./globals.css";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
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
          <FavoritesProvider>{children}</FavoritesProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
