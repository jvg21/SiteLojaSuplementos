package ProjetoMaromba.api.usuario.controller;

import ProjetoMaromba.api.usuario.entity.Usuario;
import ProjetoMaromba.api.usuario.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/usuario")
public class UserContoller {

  @Autowired private UsuarioService usuarioService;
  @PostMapping
  public Usuario saveUsuario(@Valid @RequestBody Usuario usuario)
  {
    return usuarioService.save(usuario);
  }

  // Read operation
  @GetMapping
  public List<Usuario> listUsuario()
  {
    return usuarioService.list();
  }

  // Update operation
  @PutMapping("{id}")
  public Usuario updateUsuario(@RequestBody Usuario usuario,@PathVariable("id") Long usuarioID)
  {
    return usuarioService.update(usuario, usuarioID);
  }

  // Delete operation
  @DeleteMapping("{id}")
  public String deleteUsuario(@PathVariable("id")Long usuarioID)
  {
    usuarioService.delete(usuarioID);
    return "Deleted Successfully";
  }

}
