import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
      
        <div classname="modal fade" id="exampleModal" tabIndex="{-1}" role="dialog" aria-hidden="true">
            <div classname="modal-dialog" role="document">
            <div classname="modal-content">
                <div classname="modal-header">
                <h5 classname="modal-title text-center">Log In</h5>
                <button type="button" classname="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div classname="modal-body">
                <form action="#" method="post">
                    <div classname="form-group">
                    <label classname="col-form-label">Username</label>
                    <input type="text" classname="form-control" placeholder=" " name="Name" required />
                    </div>
                    <div classname="form-group">
                    <label classname="col-form-label">Password</label>
                    <input type="password" classname="form-control" placeholder=" " name="Password" required />
                    </div>
                    <div classname="right-w3l">
                    <input type="submit" classname="form-control" defaultValue="Log in" />
                    </div>
                    <div classname="sub-w3l">
                    <div classname="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" classname="custom-control-input" id="customControlAutosizing" />
                        <label classname="custom-control-label" htmlfor="customControlAutosizing">Remember me?</label>
                    </div>
                    </div>
                    <p classname="text-center dont-do mt-3">Don't have an account?
                    <a href="#" data-toggle="modal" data-target="#exampleModal2">
                        Register Now</a>
                    </p>
                </form>
                </div>
            </div>
            </div>
        </div>
        </>

        )
    }
}
