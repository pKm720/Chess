import { character } from "../../../helper";

const Files = ({files}) => {

    return (
        <span className="Files text-white grid grid-cols-8 ml-6">
            {files.map((file)=> <span key={file} className="w-20 text-center">{character(file)}</span>)}
        </span>
    )

}

export default Files;