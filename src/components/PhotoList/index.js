import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
      {
        name: 'Grocery aisle',
        category: 'commercial',
        description:
          'Fresh, healthy produce.'
      },
      {
        name: 'Grocery booth',
        category: 'commercial',
        description:
          'Fresh, healthy produce.'
      },
      {
        name: 'Building exterior',
        category: 'commercial',
        description:
          'Beautiful architectural design.'
      },
      {
        name: 'Restaurant table',
        category: 'commercial',
        description:
          'Empty restaurant, waiting for you!'
      },
      {
        name: 'Cafe interior',
        category: 'commercial',
        description:
          'Empty restaurant, waiting for you!'
      },
      {
        name: 'Cat green eyes',
        category: 'portraits',
        description:
          'Beauty'
      },
      {
        name: 'Green parrot',
        category: 'portraits',
        description:
          'Beauty'
      },
      {
        name: 'Yellow macaw',
        category: 'portraits',
        description:
          'Beauty'
      },
      {
        name: 'Pug smile',
        category: 'portraits',
        description:
          'Beauty'
      },
      {
        name: 'Pancakes',
        category: 'food',
        description:
          'Deliciousness'
      },
      {
        name: 'Burrito',
        category: 'food',
        description:
          'Deliciousness'
      },
      {
        name: 'Scallop pasta',
        category: 'food',
        description:
          'Deliciousness'
      },
      {
        name: 'Burger',
        category: 'food',
        description:
          'Deliciousness'
      },
      {
        name: 'Fruit bowl',
        category: 'food',
        description:
          'Deliciousness'
      },
      {
        name: 'Green river',
        category: 'landscape',
        description:
          'Natural beauty'
      },
      {
        name: 'Docks',
        category: 'landscape',
        description:
          'Natural beauty'
      },
      {
        name: 'Panoramic village by sea',
        category: 'landscape',
        description:
          'Natural beauty'
      },
      {
        name: 'Domestic landscape',
        category: 'landscape',
        description:
          'Natural beauty'
      },
      {
        name: 'Park bench',
        category: 'landscape',
        description:
          'Natural beauty'
      }
    ]);
  
    const currentPhotos = photos.filter(photo => photo.category === category);
    //go thru each photo in photos array to find photos that match selected category by user 
    //if it matches, will be returned in an array and assigned to currentPhotos

    const toggleModal = (image, i) => {
      setCurrentPhoto({ ...image, index: i });
      setIsModalOpen(!isModalOpen);
    };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
        <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;