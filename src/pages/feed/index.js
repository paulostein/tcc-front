import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { GrAttachment } from 'react-icons/gr';

import { useSession } from '../../hooks/useSession';
import { postApi } from '../../services/post';

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
  const [newPost, setNewPost] = useState({});
  const { createPost } = postApi();
  const { session } = useSession();
  const { name, area } = session.user;

  function createProfileLogo(fullName) {
    const [firstName, surname] = fullName.split(' ', 2);
    return firstName.charAt(0) + surname.charAt(0);
  }

  function toggleModal() {
    setNewPost({ area: { id: 7 }, user: { id: session.user.id } });
    setIsOpen(!isOpen);
  }

  function serializeFormData() {
    const formData = new FormData();

    Object.keys(newPost).forEach((key) => {
      formData.set(key, JSON.stringify(newPost[key]));
      if (key === 'attachment') {
        formData.set('attachment', newPost.attachment);
      }
    });

    return formData;
  }

  async function handleCreatePost() {
    const formData = serializeFormData();
    await createPost(formData, session.token);
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
                <select
                  name="select"
                  onChange={(e) =>
                    setNewPost({ ...newPost, area: { id: +e.target.value } })
                  }
                >
                  <option value="7" defaultValue>
                    Público
                  </option>
                  <option value={area.id}>Meu setor</option>
                </select>
              </div>
            </ModalProfile>
            <ModalContent>
              <textarea
                rows="3"
                cols="20"
                onChange={(e) =>
                  setNewPost({ ...newPost, text: e.target.value })
                }
              />
              <div>
                {newPost.attachment && (
                  <ImageName>{newPost.attachment.name}</ImageName>
                )}
                <label htmlFor="img">
                  <GrAttachment className="input-image" />
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={(e) =>
                    setNewPost({ ...newPost, attachment: e.target.files[0] })
                  }
                />
              </div>
            </ModalContent>
            <ModalFooter>
              <button onClick={handleCreatePost} disabled={!newPost.text}>
                Publicar
              </button>
            </ModalFooter>
          </StyledModal>
        </CreatePost>
      </FeedContent>
    </FeedContainer>
  );
}
