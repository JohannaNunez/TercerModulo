import React from 'react'

class Header extends React.Component {
 
	render (){

	
			let items = this.props.links.map(function(link, i){
				return <li key={i}>{link}</li>

			})

			return(

				<ul>
					{items}
				</ul>
			)
	}

}

export default Header

