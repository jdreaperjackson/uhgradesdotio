import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThumbDetail from '../components/ThumbDetail'

function Home() {
    const [grades, setGrades] = useState([])
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

    useEffect(async () => {
        const res = await fetch('https://uhgradesapi.io/search/?search=Rizk')
        const data = await res.json()
        await setGrades(data)
    }, [])

    const toggleDarkMode = () => {
        if(mode){
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }

    const searchCountry = async term => {
        if(term.length < 3 || term === '') {
            return
        } else {
            term = (term.replace(/  +/g, ' ')).replace(/ /g,"?")
            console.log('term +++', term)
            const res = await fetch(`https://uhgradesapi.io/search/?search=${term}`)
            const data = await res.json()
            await console.log(data)
            await setGrades(data)
        }
    }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">UH Grades by John Jackson</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex container mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text" placeholder="Search for grades by class or instructor last name..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" onChange={ term => searchCountry(term.target.value)} />
            </div>
            <div className="container grid grid-cols-4 gap-16 mx-auto">
                {grades.map( (grade, index ) => <Link to={{ pathname : "details", state: grade }}  key={index}><ThumbDetail
                                                courseDescription={grade.courseDescription}
                                                term={grade.term}
                                                instructorLast={grade.instructorLast}
                                                instructorFirst={grade.instructorFirst}
                                                catalogNbr={grade.catalogNbr}
                                                subject={grade.subject}
                                                percentA={grade.percentA}
                                                aCount={grade.aCount}
                                                bCount={grade.bCount}
                                                cCount={grade.cCount}
                                                dCount={grade.dCount}
                                                fCount={grade.fCount}
                                                satisfactory={grade.satisfactory}
                                                dropCount={grade.dropCount}
                                            /></Link> )}
            </div>
        </div>
    )
}

export default Home
