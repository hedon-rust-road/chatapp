<template>
  <div class="sidebar">
    <div class="workspace">
      <div class="workspace-name">{{ workspaceName }}</div>
      <button class="add-channel" @click="addChannel">+</button>
    </div>

    <div class="channels">
      <h2>Channels</h2>
      <ul>
        <li v-for="channel in channels" :key="channel.id">
          # {{ channel.name }}
        </li>
      </ul>
    </div>

    <div class="direct-messages">
      <h2>Direct Messages</h2>
      <!-- Example of Direct Messages; this could be implemented similarly to channels if needed -->
      <ul>
        <li v-for="user in directMessages" :key="user.id">
          <img :src="user.avatar" class="avatar" alt="Avatar" /> {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    workspaceName() {
      return this.$store.getters.getWorkspace.name || 'No Workspace';
    },
    channels() {
      return this.$store.getters.getChannels;
    },
    directMessages() {
      // Placeholder for direct messages, if needed.
      // This could be another state managed by Vuex.
      return [];
    },
  },
  methods: {
    addChannel() {
      // Trigger an action to add a new channel
      const newChannel = {
        id: Date.now().toString(), // Unique ID for the new channel
        name: `Channel ${this.channels.length + 1}`,
      };
      this.$store.dispatch('addChannel', newChannel);
    },
  },
};
</script>

<style scoped>
/* Base sidebar styling */
.sidebar {
  width: 250px;
  background-color: #2f3136;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  font-size: 14px;
}

/* Workspace section */
.workspace {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.workspace-name {
  font-weight: bold;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-channel {
  background: none;
  border: none;
  color: #b9bbbe;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.add-channel:hover {
  color: #fff;
}

/* Channels section */
.channels {
  margin-bottom: 20px;
}

.channels h2 {
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #b9bbbe;
}

.channels ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.channels li {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.channels li:hover {
  background-color: #3a3e44;
}

/* Direct Messages section */
.direct-messages h2 {
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #b9bbbe;
}

.direct-messages ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.direct-messages li {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.direct-messages li:hover {
  background-color: #3a3e44;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
