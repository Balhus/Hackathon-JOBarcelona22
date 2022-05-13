import { Regalo } from './Regalo';
import './pageRegalos.css';

/**
 * Mock Data
 */
const data = [
    {
        title: "Crew🎉",
        description: "Lista regalos para el grupo Crew🎉",
        tags: ['Deportes de riesgo', 'Libros']
    },
    {
        title: "Family🎉",
        description: "Lista regalos para el grupo Family🎉",
        tags: ['Family', 'Sport']
    },
    {
        title: "Family2🎉",
        description: "Lista regalos para el grupo Family🎉",
        tags: ['Family2', 'Sport2']
    },
    {
        title: "Family3🎉",
        description: "Lista regalos para el grupo Family🎉",
        tags: ['Family2', 'Sport2']
    },
    {
        title: "Other🎉",
        description: "Lista regalos para el grupo Others🎉",
        tags: ['Gymnastics', 'E-Sports']
    },
    {
        title: "Other2🎉",
        description: "Lista regalos para el grupo Others🎉",
        tags: ['Gymnastics', 'E-Sports']
    },
    {
        title: "Other3🎉",
        description: "Lista regalos para el grupo Others🎉",
        tags: ['Gymnastics', 'E-Sports']
    }
]

/**
 * Takes the data from the data array and returns a list of "Regalo"
 * @returns All the "Regalo" to be displayed in the page
 */
export const PageRegalos = ({titulo}) => {
    return (
        <>
        <h1 className="mainPageTitulo">{titulo}</h1>
        <div className="pageRegalosMainContainer">
            {
                data.map((el, idx) =>{
                    return(
                        <Regalo key={idx} title={el.title} description={el.description} tags={el.tags} onClick={() => console.log("Has clickado: ", el.title)} />
                    )
                })
            }
            
        </div>
        </>)
}