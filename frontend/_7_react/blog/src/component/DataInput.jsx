import React from 'react'

export default function DataInput(props) {
    const { title, name, type, onChangeClick, error,placeHolder } = props;
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={name}>{title}</label>
                <input onChange={onChangeClick} name={name} id={name} type={type} className="form-control   is-invalid" placeholder={placeHolder} />
                <div className="invalid-feedback">
                    {error}
                </div>
            </div>

        </>
    )
}
