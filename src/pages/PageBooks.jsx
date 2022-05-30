import { useContext } from "react"
import DataContext from "../Context/DataContext"

export const PageBooks = () => {

	const { data } = useContext(DataContext)

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>
			<p>Books on {data === 'Technology' ? 'Web Development' : 'History'}</p>
		</div>
	)
}