import React, { useState } from 'react';
import './Zakaz.css';

const ZakazlarModal = ({ items, onClose, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditValue(item.title);
  };

  const saveEdit = (id) => {
    onEdit(id, editValue);
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="zakaz-modal-overlay justify-between" onClick={onClose}>
      <div className="zakaz-modal" onClick={(e) => e.stopPropagation()}>
        <h2> Zakazlar</h2>
        <button className="close-btn" onClick={onClose}>✖</button>

        {items.length === 0 ? (
          <p>Hozircha zakaz yo‘q.</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {editingId === item.id ? (
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={() => saveEdit(item.id)}>💾</button>
                    <button onClick={() => setEditingId(null)}>❌</button>
                  </>
                ) : (
                  <>
                    {item.title}
                    <button onClick={() => startEditing(item)}>✏️</button>
                    <button onClick={() => onDelete(item.id)}>🗑️</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ZakazlarModal;
