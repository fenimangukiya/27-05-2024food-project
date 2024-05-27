import React from 'react'
import { Container } from 'reactstrap'

export default function ComenSection(props) {
  return (
    <div>
        <section className='common_section'>
            <Container>
                <h2 className='text_white'>{props.title}</h2>
            </Container>
        </section>

        
      
    </div>
  )
}
