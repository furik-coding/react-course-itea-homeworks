import React, { Component } from 'react';

class LoaderImg extends Component {

    state = {
        loaded: false
    }

    loader = 'https://pluspng.com/img-png/loader-png-22-jan-2015-23-46-3161-loader-6-png-22-jan-2015-23-46-3087-loader-7-png-22-jan-2015-23-46-3177-loader-8-png-22-jan-2015-23-46-3582-loader-9-png-504.png';



    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        })

        console.log('Mount')
    }


    render() {
        const { src } = this.props;
        const { loaded } = this.state;
        const { loader } = this;

        return (
            <div className='user-img' >
                <img className={loaded ? 'loader' :'loaded loader'} src={loader} />
                <img className={loaded ? 'loaded' :''}  src={src} />
                <span>{loaded ? '' :'loading'}</span>
            </div>
        )
    }
}

export default LoaderImg;