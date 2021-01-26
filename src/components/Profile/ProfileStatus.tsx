import React from 'react'


export class ProfileStatus extends React.Component<any, any>  {
    state = {
        editMode: false,
        status: this.props.status
    }
    onActivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onDeActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.target.value})
        console.log('chst', this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.status!==prevProps.status) {
            this.setState({status: this.props.status})

        }
        console.log('cDidst', this.state.status)
    }

    render() {
       return (
           <div >
               {console.log('render')}
               {
                   !this.state.editMode &&
                   <div>
                       <span onDoubleClick={this.onActivateEditMode}>{this.props.status}</span>
                   </div>
               }
               {
                   this.state.editMode &&
                   <div>
                       <input onChange={this.onChangeStatus} value={this.state.status} autoFocus={true} onBlur={this.onDeActivateEditMode}/>
                   </div>
               }

           </div>
       )
   }

}

