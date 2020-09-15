import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
         <>
        <div classname="modal fade" id="exampleModal2" tabIndex="{-1}" role="dialog" aria-hidden="true">
            <div classname="modal-dialog" role="document">
            <div classname="modal-content">
                <div classname="modal-header">
                <h5 classname="modal-title">Register</h5>
                <button type="button" classname="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div classname="modal-body">
                <form action="#" method="post">
                    <div classname="form-group">
                    <label classname="col-form-label">Your Name</label>
                    <input type="text" classname="form-control" placeholder=" " name="Name" required />
                    </div>
                    <div classname="form-group">
                    <label classname="col-form-label">Email</label>
                    <input type="email" classname="form-control" placeholder=" " name="Email" required />
                    </div>
                    <div classname="form-group">
                    <label classname="col-form-label">Password</label>
                    <input type="password" classname="form-control" placeholder=" " name="Password" id="password1" required />
                    </div>
                    <div classname="form-group">
                    <label classname="col-form-label">Confirm Password</label>
                    <input type="password" classname="form-control" placeholder=" " name="Confirm Password" id="password2" required />
                    </div>
                    <div classname="right-w3l">
                    <input type="submit" classname="form-control" defaultValue="Register" />
                    </div>
                    <div classname="sub-w3l">
                    <div classname="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" classname="custom-control-input" id="customControlAutosizing2" />
                        <label classname="custom-control-label" htmlfor="customControlAutosizing2">I Accept to the Terms &amp; Conditions</label>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </>

        )
    }
}
