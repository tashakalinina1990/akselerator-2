import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { fetchDeletePost } from "../api-actions"

function ListItem({ combinedData, deletePost }) {

    return (
        <>
            <ul className="list__items">
                {!combinedData.length ? <li className="list__loader"><BeatLoader size={92} /></li> : null}
                {combinedData.map(post => {
                    return <li className="list__item" key={post.id}>
                        <NavLink to={"post/" + post.id} className="list__link">
                            <span className="list__title">{post.name}</span>
                            <p className="list__about">{post.title}</p>
                        </NavLink>
                        <button className="list__btn" onClick={() => { deletePost(post.id) }}>X</button>
                    </li>
                })}
            </ul >
        </>
    )
}

const mapToStateProps = (state) => ({
    combinedData: state.combinedData
})

const mapDispatchToProps = (dispatch) => ({
    deletePost(id) {
        dispatch(fetchDeletePost(id))
    }
})


export default connect(mapToStateProps, mapDispatchToProps)(ListItem);