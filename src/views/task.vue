<template>
  <div class="container">
    <form @submit.prevent="addTask">
      <div class="form-group row">
        <h1>DailyTask</h1>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <input type="text" class="form-control" id="nama" placeholder="Nama Tugas" v-model="nama">
        </div>
        <div class="col-sm-2">
          <button type="submit" class="btn btn-info">Tambah</button>
        </div>
      </div>
    </form>
    <ul class="list-group">
      <template v-if="this.tasks.length !== 0">
        <li class="list-group-item" v-for="(task, index) in tasks" :key="index">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" @change="setComplate(index)" :id="index">
            <label :class="[{'is-done': task.status}, 'custom-control-label']" :for="index">{{task.nama}}</label>
            <a href="#" class="float-right" @click.prevent="deleteTask(index)">Hapus</a>
          </div>
        </li>
      </template>
      <li class="list-group-item" v-else>Tidak ada tugas</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'task',
    data () {
      return {
        tasks: [
          { nama: 'Check this custom checkbox', status: false },
          { nama: 'Check this custom checkbox', status: false },
          { nama: 'Check this custom checkbox', status: false }
        ],
        nama: ''
      }
    },
    methods: {
      addTask () {
        this.tasks.push({
          nama: this.nama,
          status: false
        })
        this.nama = ''
      },
      deleteTask (index) {
        this.tasks.splice(index, 1)
      },
      setComplate (index) {
        this.tasks[index].status = !this.tasks[index].status
      }
    }
  }
</script>

<style>
  .is-done {
    text-decoration: line-through;
  }
</style>
