import React, { useState, useEffect } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { GrAttachment } from 'react-icons/gr';
import { FaTrash } from 'react-icons/fa';

import { useSession } from '../../hooks/useSession';
import { postApi } from '../../services/post';
import formatDate from '../../utils/formatDate';

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
  PostContent,
  WaitingPost,
} from './styles';

export default function Feed() {
  const [isOpen, setIsOpen] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [posts, setPosts] = useState([]);
  const { createPost, getPosts, deletePost } = postApi();
  const { session } = useSession();
  const { name, area } = session.user;

  async function getAllPosts() {
    const { data } = await getPosts(session.token);
    data
      .sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      })
      .forEach((item) => (item.createAt = formatDate(new Date(item.createAt))));
    setPosts(data);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

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
    try {
      const formData = serializeFormData();
      await createPost(formData, session.token);
      getAllPosts();
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeletePost(id) {
    try {
      await deletePost(id, session.token);
      getAllPosts();
      alert('Post deletado');
    } catch (error) {
      console.error(error);
    }
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
              {newPost.attachment && (
                <div>
                  {newPost.attachment.type.includes('image') ? (
                    <div className="image-attachment">
                      <img
                        src={URL.createObjectURL(newPost.attachment)}
                        alt="attachment"
                      />
                    </div>
                  ) : (
                    <div className="image-attachment">
                      <video width="400" controls>
                        <source
                          src={URL.createObjectURL(newPost.attachment)}
                          type={newPost.attachment.type}
                        />
                      </video>
                    </div>
                  )}
                </div>
              )}
              <div className="attachment">
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
                  accept="video/*|image/*"
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
        {posts.map((post) => (
          <PostContent key={post.id}>
            <div className="profile">
              <Profile>{createProfileLogo(post.user.name)}</Profile>
              <div className="info">
                <div className="info-detail">
                  <span>{post.user.name}</span>
                  <span className="detail-date">{post.createAt}</span>
                </div>
                <div className="post-info">
                  <span>
                    {post.area.name === 'all' ? 'Público' : post.area.name}
                  </span>
                  {session.user.id === post.user.id && (
                    <FaTrash
                      className="post-delete"
                      onClick={() => handleDeletePost(post.id)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="post-text">{post.text}</div>
            {post.attachment && (
              <div>
                {post.attachmentType.includes('image') ? (
                  <div className="img-div">
                    <img
                      src={`http://localhost:3001/public/${post.attachment}`}
                      alt="attachment"
                    />
                  </div>
                ) : (
                  <div className="video-div">
                    <video controls>
                      <source
                        src={`http://localhost:3001/api/video/${post.attachment}`}
                        type={post.attachmentType}
                      />
                    </video>
                  </div>
                )}
              </div>
            )}
          </PostContent>
        ))}
        {posts.length === 0 && (
          <WaitingPost>
            <h1>Aguardando criação de post...</h1>
          </WaitingPost>
        )}
      </FeedContent>
    </FeedContainer>
  );
}
