import { Header } from "../header";
import { ParticlesBackground } from "../particles";
import { Description } from "../description";
import { ContainerSC, ContentSC } from "./mui";

export function Layout() {
  return (
    <ContainerSC>
      <ParticlesBackground />
      <Header />
      <Description />
      <ContentSC>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mollis diam. Proin quis placerat tortor, quis pharetra eros. Sed eu placerat nulla. Vestibulum feugiat dapibus tellus in placerat. Etiam ullamcorper ante et mattis laoreet. Donec iaculis, mi nec condimentum sodales, nisl dolor elementum ligula, vel laoreet libero metus ut metus. Aliquam sed vehicula mi. Nullam eget mauris pretium, venenatis enim et, viverra augue. In gravida sodales mauris, viverra luctus metus ultricies eu. Pellentesque eget arcu at risus euismod mattis. Mauris tempor pulvinar scelerisque. Pellentesque nec rhoncus augue. Cras ut aliquam quam. Pellentesque fermentum enim et felis volutpat, in porta ante mattis. Suspendisse malesuada nisi sapien. Quisque tellus urna, eleifend id ligula eget, bibendum auctor leo.
        Suspendisse suscipit lobortis orci, vitae suscipit lacus imperdiet ac. Aenean sed auctor turpis. Donec non congue lectus. Duis sollicitudin, metus in fermentum ultrices, magna ipsum porta augue, eu aliquam enim velit vel tellus. Ut imperdiet augue ut risus fermentum aliquam. Duis in nulla tincidunt, pellentesque dui vel, ultrices eros. Morbi a velit id nisi rutrum aliquam. Proin ultricies aliquet consequat. Vestibulum bibendum ornare lectus vitae auctor. Vestibulum ultricies condimentum eleifend. Pellentesque ullamcorper vel lectus varius mollis. Nulla facilisi. Vivamus vitae vestibulum nisi, at finibus purus. Vestibulum euismod, nisl eu auctor dignissim, ante odio pharetra erat, id egestas massa massa a mauris. Duis at eleifend justo, eget mollis dolor. Fusce imperdiet auctor tortor, sed condimentum enim convallis in.
        Sed suscipit convallis felis. Nam ultricies nec massa nec pellentesque. Integer congue pellentesque ullamcorper. Praesent eu augue ex. In porta vel nisl sit amet maximus. Aliquam ut metus posuere, mollis risus non, aliquet libero. Fusce aliquam metus non laoreet bibendum. Nunc elementum euismod erat, dictum lobortis orci dapibus sed.
        Vestibulum volutpat, mi sed laoreet aliquam, dolor velit porttitor odio, quis pulvinar mauris ipsum a eros. Aenean congue laoreet eros id rhoncus. Aenean facilisis faucibus massa eu semper. Vivamus maximus lorem nisi, eu finibus enim ultricies eget. Vestibulum volutpat mauris id nisi dignissim elementum. Quisque porta eu dolor pharetra dictum. Proin vestibulum sodales odio at imperdiet. Fusce pulvinar sagittis sem id rutrum.
        Proin volutpat augue vitae sagittis molestie. Cras pretium placerat lacus, molestie sodales massa semper a. Maecenas molestie tellus vel ligula dignissim ullamcorper. Fusce sodales, dolor nec fermentum interdum, diam augue interdum lorem, sollicitudin pellentesque risus quam eu nisl. Ut fringilla diam odio, maximus fringilla velit consectetur at. Aenean sit amet nunc eget quam lacinia luctus. Integer neque nulla, dignissim quis hendrerit in, vestibulum ac enim. Praesent sit amet ipsum nulla. Integer sed ultrices lectus, a cursus nisi. Sed accumsan non magna at maximus. Proin nec leo condimentum, tempor est consequat, venenatis mi. Nulla ut viverra massa, at vestibulum felis. Vivamus libero sapien, congue in egestas et, maximus in tellus.`}
      </ContentSC>
    </ContainerSC>
  );
}
