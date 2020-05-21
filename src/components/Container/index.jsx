import React from 'react'

const Container = ({children}) => (
	<main className="flex flex-col min-h-screen">
		{children}
	</main>
)

const Content = ({children}) => (
	<div className="flex-1">
		{children}
	</div>
)

export {Container, Content}
