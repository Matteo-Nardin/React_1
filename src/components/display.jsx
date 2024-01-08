import {Component} from "react"

class Display extends Component{
    render() {
        console.log(this.props)
        return (
          // we need the src and the alt attributes
          <>
            <p>{this.props.stringa}</p>
            {this.props.pippo.map((x, index) => <p key={index}>{x.name}</p>)}
            <p>{this.props.obj}</p>
          </>
    
        )
    }
}

export default Display
