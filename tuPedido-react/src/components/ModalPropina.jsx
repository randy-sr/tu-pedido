import React, { useState } from 'react'
import { BsDash, BsPlusLg, BsXCircle } from 'react-icons/bs'
import { formatearDinero } from '../helpers'
import useTienda from '../hooks/useTienda'
import Modal2 from '../styled-components/modal2'
import ModalInfo from '../styled-components/modalInfo'

const ModalPropina = () => {

  const [ cantidad , setCantidad ]  = useState(1)

  const{ handleClickModal2, handleAgregarPropina } = useTienda()


  return (
    <Modal2>
        <ModalInfo>
          <div className="d-flex justify-content-end" type="button">
              <button className="btn btn-primary" onClick={ handleClickModal2 }>
                  <BsXCircle />
              </button>
          </div>
          <h3>Gracias por valorarnos</h3>

          <div className="d-flex justify-content-center gap-3 mt-3">
              <button 
                  type="button"
                  className="btn btn-secondary h-75"
                  onClick={ () => {
                      if ( cantidad <= 1 ) return
                      setCantidad( cantidad - 1)
                  }}
              >
                  <BsDash/>
              </button>

              <p className="fs-2 text-dark">{formatearDinero(cantidad)}</p>

              <button 
                  type="button"
                  className="btn btn-secondary h-75"
                  onClick={ () => {
                      if ( cantidad >= 50 ) return
                      setCantidad( cantidad + 1)
                  }}
              >
                  <BsPlusLg />
              </button>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success w-100"
              onClick={ () => {
                handleAgregarPropina(cantidad)
                handleClickModal2()
            } }
            >
              Enviar
            </button>
          </div>
        </ModalInfo>
    </Modal2>
  )
}

export default ModalPropina