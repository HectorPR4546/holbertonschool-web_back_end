import ClassRoom from './0-classroom.js';

/**
 * Creates an array of {@link ClassRoom} objects.
 * @returns {ClassRoom[]} An array of {@link ClassRoom} objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
