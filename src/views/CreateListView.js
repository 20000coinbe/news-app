import EvnetBus from '@/utils/EvnetBus'
import ListView from './ListView'

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    // 데이터를 요청하는 역할은 여기서
    created() {
      EvnetBus.$emit('start:spinner')
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched');
            EvnetBus.$emit('end:spinner')
          })
          .catch(err => {
            console.log(err.message)
          })
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView)
    }

  }
}