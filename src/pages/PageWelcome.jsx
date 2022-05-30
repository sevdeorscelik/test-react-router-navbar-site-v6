import { useContext } from "react"
import DataContext from "../Context/DataContext"

export const PageWelcome = () => {

	const { data, setData } = useContext(DataContext)
	console.log(data);

	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>

			<p>{data}</p>

			<button onClick={() => data === 'Technology' ? setData('History') : setData('Technology')}> Subject </button>
		</div>
	)
}