import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReviewCard from '../cmps/ReviewCard'
import reviewService from '../reviewService.js'

export default class ReviewDetails extends Component {
    state = {
        review: null
    }

    componentDidMount() {
        this.loadReview()
    }

    loadReview = () => {
        var id = this.props.location.pathname.substring(2)
        var review = reviewService.getById(id)
        this.setState({ review: review })
    }

    onRemove = (id) => {
        reviewService.remove(id)
        this.props.history.push('/')
    }

    onSave = (id, data) => {
        reviewService.update(id, data)
        this.loadReview()
    }

    render() {
        const { review } = this.state
        return !review ? 'loading' : (
            <section className="review-details">
                <Link to='/' exact='true' className="back">
                    חזרה לביקורות &#8618;
                </Link>
                <ReviewCard review={review} onRemove={this.onRemove} onSave={this.onSave} />
            </section>
        )
    }
}
