import Story from "../../Component/Stories/index.component";

export default (props) => {
    return (
        <>
            <Story title={props.location.state.name} endpoint={props.location.state.endpoint}/>
        </>
    )
}