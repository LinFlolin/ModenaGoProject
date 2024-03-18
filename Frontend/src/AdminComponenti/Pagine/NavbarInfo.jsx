import React from 'react'
import '../Pagine/PagineCss/NavbarInfo.css'
import { Link} from 'react-router-dom'
import { useState } from 'react'

export const NavbarInfo = ({data}) => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
     setSelectedItem(item);
  };

  return (
    <div>
      
    </div>
  )
}

