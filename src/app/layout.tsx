import React from 'react';
import '../styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Taugor',
	description: 'Página de cadastro de funcionários',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
