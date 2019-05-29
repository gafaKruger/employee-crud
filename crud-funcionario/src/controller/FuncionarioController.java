public class FuncionarioController {

    public boolean validaFuncionario(String nome, String sobrenome, String email, String numeroPis) {
        try {
            if (nome.length() < 2 && nome.length() > 30) {
                return false;
            }

            if (sobrenome.length() < 2 && sobrenome.length() > 30) {
                return false;
            }

            if (email.length() < 5 || !email.contains("@")) {
                return false;
            }

            if (numeroPis.length() != 11) {
                return false;
            }

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}