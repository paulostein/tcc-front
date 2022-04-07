import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { GrAttachment } from 'react-icons/gr';

import { useSession } from '../../hooks/useSession';

import {
  FeedContainer,
  FeedContent,
  CreatePost,
  Profile,
  StyledModal,
  ModalProfile,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ImageName,
} from './styles';

export default function Feed() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState({});
  const { session } = useSession();
  const { name, area } = session.user;

  function createProfileLogo(fullName) {
    const [firstName, surname] = fullName.split(' ', 2);
    return firstName.charAt(0) + surname.charAt(0);
  }
  function toggleModal() {
    setImage({});
    setIsOpen(!isOpen);
  }

  return (
    <FeedContainer>
      <FeedContent>
        <CreatePost>
          <Profile>{createProfileLogo(name)}</Profile>
          <button onClick={toggleModal} className="create-post">
            Diga o que você está pensando, {name.split(' ', 1)}?
          </button>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <ModalHeader>
              <span className="title">Criar post</span>
              <ImCancelCircle className="cancel" onClick={toggleModal} />
            </ModalHeader>
            <ModalProfile>
              <Profile>{createProfileLogo(name)}</Profile>
              <div className="options">
                <span>{name}</span>
                <select name="select">
                  <option value="7" defaultValue>
                    Público
                  </option>
                  <option value={area.id}>Meu setor</option>
                </select>
              </div>
            </ModalProfile>
            <ModalContent>
              <textarea rows="3" cols="20" />
              <div>
                {image && <ImageName>{image.name}</ImageName>}
                <label htmlFor="img">
                  <GrAttachment className="input-image" />
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </ModalContent>
            <ModalFooter>
              <button>Publicar</button>
            </ModalFooter>
          </StyledModal>
        </CreatePost>
      </FeedContent>
    </FeedContainer>
  );
}
