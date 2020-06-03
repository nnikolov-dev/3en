import React, {useState} from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Dropdown from '../Dropdown'

const Team = () => {
	const [current, setCurrent] = useState(null)

	const handleChange = (arg) => () => setCurrent(arg)

	return (
		<StaticQuery
			query={graphql`
		query peopleQuery {
			allKontentItemPerson {
			  nodes {
				elements {
				  name {
					value
				  }
				  slug {
					value
				  }
				  areas_of_expertise {
					value {
					  ... on kontent_item_service {
						id
						elements {
						  title {
							value
						  }
						}
					  }
					}
				  }
				}
			  }
			}
		  }				
		`}
			render={({allKontentItemPerson: {nodes: people}}) => (
				<>
					<div className="mb-6 flex justify-center md:justify-end">
						<Dropdown
							items={
								[...new Set(
									people
										.map(({elements: {areas_of_expertise: {value: areasOfExpertise}}}) =>
											areasOfExpertise.map(({elements: {title: {value: areaOfExpertise}}}) => areaOfExpertise))
										.flat(),
								)]
							}
							onChange={handleChange}
						/>
					</div>
					<ul className="flex flex-wrap md:text-xl text-center">
						{people
							.filter(({elements: {
								areas_of_expertise: {value: areasOfExpertise},
							}}) =>
								!current
								|| areasOfExpertise
									.filter(({elements: {title: {value: areaOfExpertise}}}) => areaOfExpertise === current)
									.length === 1)
							.map(({elements: {
								name: {value: name},
								slug: {value: slug},
							}}) => (
								<li
									key={`team-${name}`}
									className="w-full md:w-1/4 p-4 md:p-8 border-b-2 hover:bg-lite font-light transition duration-300"
								>
									<Link to={`/person/${slug}`}>{name}</Link>
								</li>
							))}
					</ul>
				</>
			)}
		/>
	)
}

export default Team
