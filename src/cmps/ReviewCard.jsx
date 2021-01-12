import React, { Component } from 'react'
import svg from '../svgs/more-options.svg'

export default class ReviewCard extends Component {
    state = {
        isEditable: null,
        isMenuOpen: null,
        originalText: null,
        currentText: null,
        height: null
    }

    stopParentEvent = (event) => {
        event.stopPropagation()
        event.preventDefault()
    }

    toggleMenu = (event) => {
        this.stopParentEvent(event)
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))
    }

    toggleEditable = (event) => {
        this.stopParentEvent(event)
        if(!this.state.isEditable){
            const height = document.getElementsByClassName('long-text')[0].clientHeight+8;
            this.setState({ height });
        }
        this.setState(prevState => ({ isEditable: !prevState.isEditable }))
        this.setState({ currentText: this.props.review.data })
    }

    handleChange = (event) => {
        this.stopParentEvent(event)
        this.setState({ currentText: event.target.innerText })
    }

    handleInput = (event) => {
        this.stopParentEvent(event)
        const value = event.target.value
        this.setState({ currentText: value })
    }

    saveChanges = (event) => {
        this.stopParentEvent(event)
        this.props.onSave(this.props.review.id, this.state.currentText)
        this.toggleEditable(event)
        this.toggleMenu(event)
    }

    onCancel = (event) => {
        this.stopParentEvent(event)
        this.setState({ currentText: this.state.originalText })
        this.toggleEditable(event)
        this.toggleMenu(event)
    }

    removeReview = (event) => {
        this.stopParentEvent(event)
        this.props.onRemove(this.props.review.id)
        this.toggleMenu(event)
    }

    render() {
        var { isEditable, isMenuOpen,height } = this.state
        const { review, idx } = this.props

        return !review ? 'loading' : (
            <section className="review-card flex">
                {idx &&
                    <div className="index">
                        {idx}
                    </div>
                }
                <div className="content">
                    {
                        /* More-options button ("...") */
                        !isEditable &&
                        <button onClick={(event) => this.toggleMenu(event)} className="menu pill-btn">
                            <img src={svg} alt='open-menu'/>
                        </button>
                    }
                    {!isEditable && isMenuOpen &&
                        <div className="tool-bar flex column">
                            {/* Edit button */}
                            <button onClick={(event) => this.toggleEditable(event)}>
                                עריכה
                            </button>
                            {/* Delete button */}
                            <button onClick={(event) => this.removeReview(event)}>
                                מחיקה
                            </button>
                        </div>
                    }
                    {/* Editable paragraph */}
                    {isEditable ?
                        <form className="long-text">
                            <textarea style={{height:height+'px'}} onClick={(event) => this.stopParentEvent(event)} onChange={(event) => this.handleInput(event)} value={this.state.currentText}></textarea>
                        </form>
                        : <p className="long-text" >
                            {review.data}
                        </p>
                    }
                    {
                        /* Statistics */
                        !isEditable &&
                        <p className="data">
                            <span>{review.statistics.publishedContributorsCount}</span>
                            &nbsp; תומכים בביקורת&nbsp;
                            &#40;
                            <span>{review.statistics.publishedContributionsPercent}</span>
                            &#37;
                            מהתשובות&#41;
                        </p>
                    }
                    {isEditable && <div className="btns flex">
                        {/* Cancel edit */}
                        <button onClick={(event) => this.onCancel(event)} className="cancel pill-btn">
                            ביטול
                        </button>
                        {/* Save edit */}
                        <button onClick={(event) => this.saveChanges(event)} className="save pill-btn">
                            שמירה
                        </button>
                    </div>
                    }
                </div>
            </section>
        )
    }
}

