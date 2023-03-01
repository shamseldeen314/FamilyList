import React from 'react'

const Parent = (people) => {

    return (
        <>
          {people.map((personlist) => {
            const { id, name, address, nationality} = personlist;
            return (
              <article key={id} className='personlist'>
                {/* <img src={person.image} alt={name} /> */}
                <div>
                  <h4>{name}</h4>
                  <p>{address}</p>
                  <p>{nationality}</p>
    
                </div>
              </article>
            );
          })}
        </>
      );
}

export default Parent