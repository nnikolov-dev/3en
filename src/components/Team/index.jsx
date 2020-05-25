import React, {useState, useRef} from 'react'

const team = [
	{
		name: 'John Doe',
		image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
	},
	{
		name: 'Gin Doe',
		image: 'https://images.unsplash.com/photo-1543165365-07232ed12fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	},
	{
		name: 'Jack Doe',
		image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
	},
	{
		name: 'John Doe',
		image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
	},
	{
		name: 'Gin Doe',
		image: 'https://images.unsplash.com/photo-1543165365-07232ed12fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	},
	{
		name: 'Jack Doe',
		image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
	},
]

const Team = () => {
	const [current, setCurrent] = useState(0)
	const scrollRef = useRef(null)
	const handleActive = (arg) => (e) => {
		scrollRef.current.scroll({
			top: e.currentTarget.offsetTop,
			behavior: 'smooth',
		})
		setCurrent(arg)
	}

	return (
		<div className="bg-white flex max-h-auto flex-wrap-reverse md:flex-no-wrap md:max-h-screen">
			<div className="w-full md:w-1/3 overflow-y-auto" ref={scrollRef}>
				{team.map((member, i) => (
					<div
						className={`p-16 ${current === i ? 'bg-primary text-white' : 'bg-white text-shade cursor-pointer hover:bg-gray-200 transition duration-150'}`}
						key={`team-${member.name}-${member.image}`}
						onClick={handleActive(i)}
					>
						<h1 className="text-2xl">{member.name}</h1>
						<h2 className="text-lg mb-4">Lawyer</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cum error nemo velit aliquam, unde exercitationem dolorum temporibus aspernatur vero saepe totam impedit magnam eos commodi modi! Earum, ex officia.</p>
					</div>
				))}
			</div>
			<div className="w-full md:w-2/3">
				<img
					src={team[current].image}
					alt={team[current].name}
					className="h-96 md:h-full w-full object-cover object-top"
				/>
			</div>
		</div>
	)
}
export default Team
