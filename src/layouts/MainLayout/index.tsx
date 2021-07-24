import React, { ReactElement, ReactNode } from 'react'

interface Props {
	children: ReactNode;
}

export default function MainLayout({ children }: Props): ReactElement {
	return (
		<div>
			{children}
		</div>
	)
}
